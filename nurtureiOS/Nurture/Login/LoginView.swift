//
//  LoginView.swift
//  Nurture
//
//  Created by swayam on 28/02/24.
//

import SwiftUI
import GoogleSignIn
import GoogleSignInSwift

struct LoginView: View {
    @StateObject var viewModel = LoginViewModel()
    @State private var showHomeView = false
    var body: some View {
        VStack(alignment: .center, spacing: 25){
            Image("icon 1")
                .frame(width: 50, height: 250, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                .padding(50)
            
                
            Text("Access Nurture with Google")
                .bold()
                .foregroundStyle(.black)
                .font(.title2)
            Text("We understand the sensitive nature of health data and never store data that we don't require explicitly")
                .italic()
                .padding([.leading,.trailing],20)
//                .font(.custom("caroni", size: 18))
                .foregroundStyle(.black)
                .multilineTextAlignment(.leading)
                .background{
                    RoundedRectangle(cornerRadius: 10)
                        .foregroundStyle(Color(uiColor: UIColor(hex: "2EC9FB")!))
                        .frame(width: 380, height: 75, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                }
            GoogleSignInButton(viewModel: GoogleSignInButtonViewModel(scheme: .light, style: .wide, state: .normal))
            {
                Task {
                    do {
                        try await viewModel.googleSignIn()
                        showHomeView = true
                    } catch {
                        print("Error")
                    }
                }
            }
            .shadow(color: .gray, radius: 3)
            .padding()
            .fullScreenCover(isPresented: $showHomeView) {
                Dashboard(selectedTab: 0)
            }
        }
        .background(Color.white)
    }
}

#Preview {
    LoginView()
}
