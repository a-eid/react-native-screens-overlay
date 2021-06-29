#import <React/RCTViewManager.h>
#import <React/RCTView.h>


@interface ReactNativeScreensOverlayManager : RCTViewManager
@end

@interface RNViewContainer: UIView
@end


@interface ReactNativeScreensOverlay : RCTView
@property (nonatomic) BOOL shown;
@property (nonatomic) BOOL draggable;
@end