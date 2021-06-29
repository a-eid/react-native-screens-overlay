#import <UIKit/UIKit.h>
#import <React/RCTInvalidating.h>
#import <React/RCTTouchHandler.h>

#import "ScreensOverlayView.h"

@interface ReactNativeScreensOverlay() <RCTInvalidating>
@end

@implementation RNViewContainer

- (UIView *) hitTest:(CGPoint)point withEvent:(UIEvent *)event {
  UIView *hitTestResult = [super hitTest:point withEvent:event];
  if ([hitTestResult isKindOfClass:[RNViewContainer class]]) {
    return nil;
  }
  return hitTestResult;
}

@end

@implementation ReactNativeScreensOverlay {
  __weak RCTBridge *_bridge;
  RNViewContainer *_container;
  CGRect _reactFrame;
  RCTTouchHandler *_touchHandler;
}

- (UIView *) hitTest:(CGPoint)point withEvent:(UIEvent *)event
{
    UIView *hitTestResult = [super hitTest:point withEvent:event];
    if ([hitTestResult isKindOfClass:[ReactNativeScreensOverlay class]]) {
      return nil;
    }
    return hitTestResult;
}


- (instancetype)initWithBridge:(RCTBridge *)bridge
{
  if (self = [super init]) {
    _bridge = bridge;
    _reactFrame = CGRectNull;
    _container = self.container;

    UIWindow *window = RCTSharedApplication().delegate.window;
    [window addSubview:_container];
  }

  return self;
}


- (void)reactSetFrame:(CGRect)frame
{
  _reactFrame = frame;
  [_container setFrame:frame];
}

- (void)addSubview:(UIView *)view
{
  [_container addSubview:view];
}


- (RNViewContainer *)container
{
  if (_container == nil) {
    _container = [[RNViewContainer alloc] initWithFrame:_reactFrame];
  }

  return _container;
}



- (void)didMoveToWindow
{
  if (self.window == nil) {
    [_touchHandler detachFromView:_container];
  } else {
    if (_touchHandler == nil) {
      _touchHandler = [[RCTTouchHandler alloc] initWithBridge:_bridge];
    }
    [_touchHandler attachToView:_container];
  }
}

- (void)invalidate
{
  _container = nil;
}

@end

@implementation ReactNativeScreensOverlayManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[ReactNativeScreensOverlay alloc] initWithBridge:self.bridge];
}

@end
