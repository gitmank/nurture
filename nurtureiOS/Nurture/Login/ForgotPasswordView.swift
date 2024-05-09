//
//  ForgotPasswordView.swift
//  Nurture
//
//  Created by swayam on 27/02/24.
//

import SwiftUI

struct ForgotPasswordView: View {
    var body: some View {
        GeometryReader{ geo in
            VStack{
                Capsule()
                    .foregroundStyle(Color.gray)
                    .frame(width: 50, height: 5)
                    .padding(.top, 8)
                Text("Forgot Password")
                Text("Email")
                Button(action: { }){
                    Text("Continue")
                }
            }
            .frame(width: geo.size.width, height: geo.size.height)
            .background(Color(uiColor: UIColor(hex: "E5E7E8")!).ignoresSafeArea(.all))
        }
    }
}

#Preview {
    ForgotPasswordView()
}
