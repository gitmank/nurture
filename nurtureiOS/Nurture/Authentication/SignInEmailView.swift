//
//  SignInEmailView.swift
//  Nurture
//
//  Created by Pranav Chunchur on 15/12/23.
//

import SwiftUI

@MainActor

final class SignInEmailViewModel: ObservableObject{
    @Published var email = ""
    @Published var password = ""
    
    func signIn(){
        guard !email.isEmpty,!password.isEmpty else{
            print("No email or password found")
            return
        }
        Task{
            do{
                let returnedUserData = try await AuthenticationManager.shared.createUser(email: email, password: password)
                print("Successfully logged in")
                print(returnedUserData)
            }
            catch{
                print("Error!: \(error)")
                
            }
        }
    }
    
}
struct SignInEmailView: View {
    @StateObject private var viewModel = SignInEmailViewModel()
    
    
    var body: some View {
        VStack{
            TextField("Email", text: $viewModel.email)
                
                .bold()
                .padding()
                .frame(width: 375)
                .background(Color.teal.opacity(0.5))
                .cornerRadius(20)
                
            
            SecureField("Password" , text: $viewModel.password)
                .bold()
                .padding()
                .frame(width: 375)
                .background(Color.teal.opacity(0.5))
                .cornerRadius(20)
            
            Button{
                viewModel.signIn()
            }label:{
                Text("Sign In")
                    .font(.headline)
                    .foregroundColor(.white)
                    .frame(height: 60)
                    .frame(width: 300)
                    .background(Color.accentColor)
                    .cornerRadius(15)
                    .padding(10)
            }
            Spacer()
        }
        .padding()
        .navigationTitle("Sign In with Email")
    }
    
}

struct SignInEmailView_Previews: PreviewProvider{
    static var previews: some View{
        NavigationStack{
            SignInEmailView()
        }
    }
}
