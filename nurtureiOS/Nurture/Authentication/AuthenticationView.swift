
//
//  AuthenticationView.swift
//  Nurture
//
//  Created by Pranav Chunchur on 6/11/23.
//

import SwiftUI

struct AuthenticationView: View {
    var body: some View {
        VStack{
            NavigationLink{
                SignInEmailView()
            } label: {
                Text("Sign In with Email")
                    .font(.headline)
                    .foregroundColor(.white)
                    .frame(height: 60)
                    .frame(maxWidth: .infinity)
                    .background(Color.accentColor)
                    .cornerRadius(15)
                    .padding(10)
                
            }
            Spacer()
            
        }
        .navigationTitle("Sign In")
        
    }
}


struct AuthenticationView_Previews: PreviewProvider{
  
    
    static var previews: some View{
        NavigationStack{
            AuthenticationView()
        }
    }
}
