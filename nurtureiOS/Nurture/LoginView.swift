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
    @State private var showInitialEvalView = false
    var body: some View {
        VStack(alignment: .center, spacing: 25){
            Image("icon 1")
                .padding(.bottom,50)
                
            Text("Access Nurture with Google")
                .bold()
                .foregroundStyle(.black)
                .font(.title2)
            Text("We understand the sensitive nature of health data and never store data that we don't require explicitly")
                .padding([.leading,.trailing],20)
                .font(.custom("caroni", size: 18))
                .foregroundStyle(.black)
                .multilineTextAlignment(.center)
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
                        showInitialEvalView = true
                    } catch {
                        print("Error")
                    }
                }
            }
            .padding()
            .fullScreenCover(isPresented: $showInitialEvalView) {
                InitialEvaluationView()
            }
        }
    }
}

#Preview {
    LoginView()
}
