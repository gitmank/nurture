//
//  ProfileView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI

struct ProfileView: View {
    var body: some View {
        GeometryReader{ geo in
            VStack {
                Text("Profile")
                Spacer()
                Text("hi")
            }
            .frame(width: geo.size.width, height: geo.size.height)
        }
    }
}

#Preview {
    ProfileView()
}
