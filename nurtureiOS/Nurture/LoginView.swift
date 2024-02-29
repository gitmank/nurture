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
        
        GoogleSignInButton(viewModel: GoogleSignInButtonViewModel(scheme: .dark, style: .icon, state: .normal))
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
        .fullScreenCover(isPresented: $showInitialEvalView) {
            InitialEvaluationView()
        }
    }
}

#Preview {
    LoginView()
}
