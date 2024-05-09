//
//  AuthenticationManager.swift
//  Nurture
//
//  Created by Pranav Chunchur on 15/12/23.
//

import Foundation
import FirebaseAuth

struct AuthDataResultModel{
    let uid: String
    let email: String?
    let photoUrl: String?
    
    init(user: User){
        self.uid = user.uid
        self.email = user.email
        self.photoUrl = user.photoURL?.absoluteString
    }
}
final class AuthenticationManager{
    static let shared = AuthenticationManager()
    
    private init() {
    }
    func createUser(email: String, password: String)async throws -> AuthDataResultModel{
        let authDataResult = try await Auth.auth().createUser(withEmail: email, password: password)
        
        
        return AuthDataResultModel(user: authDataResult.user)
    }
    
    func signOut() throws{
        try Auth.auth().signOut()
    }
}

extension AuthenticationManager {
    @discardableResult
    func signInWithGoogle(credential: AuthCredential)async throws -> AuthDataResultModel {
        let authDataResult = try await Auth.auth().signIn(with: credential)
        let tokenid = try await authDataResult.user.getIDToken()
        print(tokenid)
        return AuthDataResultModel(user: authDataResult.user)
    }
}
