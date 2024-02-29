//
//  LoginViewModel.swift
//  Nurture
//
//  Created by swayam on 28/02/24.
//

import Foundation
import GoogleSignIn
import FirebaseAuth

@MainActor
final class LoginViewModel: ObservableObject {
    
    func googleSignIn() async throws {
        guard let topV = Utilities.shared.topViewController() else {
            throw URLError(.cannotFindHost)
        }
        let gidResult = try await GIDSignIn.sharedInstance.signIn(withPresenting: topV)
        guard let tokenID = gidResult.user.idToken?.tokenString else {
            throw URLError(.badServerResponse)
        }
        let accessToken = gidResult.user.accessToken.tokenString
        let credential = GoogleAuthProvider.credential(withIDToken: tokenID, accessToken: accessToken)
        try await AuthenticationManager.shared.signInWithGoogle(credential: credential)
    }
}
