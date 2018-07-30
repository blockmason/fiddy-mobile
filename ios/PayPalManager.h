//
//  PayPalManager.h
//  LNDR
//
//  Created by Ethan Arutunian on 6/6/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <PayPalMobile.h>
#import <React/RCTBridgeModule.h>

@interface PayPalManager : NSObject <RCTBridgeModule, PayPalProfileSharingDelegate, PayPalPaymentDelegate>
+ (void)setup;
@end
