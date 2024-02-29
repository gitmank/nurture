//
//  DailyCheckInView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI

struct DailyCheckInView: View {
    var body: some View {
        GeometryReader{ geo in
            VStack {
                Text("Daily Check In")
                Spacer()
                Button(action: {}) {
                    Text("hi")
                }
            }
            .frame(width: geo.size.width, height: geo.size.height)
        }
    }
}

#Preview {
    DailyCheckInView()
}
