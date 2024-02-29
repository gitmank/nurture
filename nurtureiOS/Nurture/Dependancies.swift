//
//  Dependancies.swift
//  Nurture
//
//  Created by swayam on 26/02/24.
//

import Foundation
import SwiftUI

extension UIColor {
    convenience init?(hex:String) {
        var rgbValue: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&rgbValue)
        
        let r = CGFloat((rgbValue & 0xFF0000) >> 16) / 255.0
        let g = CGFloat((rgbValue & 0x00FF00) >> 8) / 255.0
        let b = CGFloat(rgbValue & 0x0000FF) / 255.0
        self.init(red: r, green: g, blue: b, alpha:1.0)
    }
}

