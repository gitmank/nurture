//
//  ProfileViewModel.swift
//  Nurture
//
//  Created by swayam on 02/03/24.
//

import Foundation
import Firebase
import FirebaseAuth

class ProfileViewModel: ObservableObject {
    func getDetail() async throws {
        let user = Auth.auth().currentUser
        if let user = user {
            let uid = user.uid
            let email = user.email
            let photoUrl = user.photoURL
            print("Uid id \(uid)")
            print("Emial is \(email)")
            print("Photo is \(photoUrl)")
            let tokenid = try await user.getIDToken()
            print(tokenid)
        }
        
    }
}
