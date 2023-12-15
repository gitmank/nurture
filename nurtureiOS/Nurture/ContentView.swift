//
//  ContentView.swift
//  Nurture
//
//  Created by Pranav Chunchur on 06/11/23.
//

import SwiftUI
import GoogleSignIn
import GoogleSignInSwift

struct ContentView: View {
    var body: some View {
        VStack {
            NavigationLink{
                //SingInEmailView(showSignInView: $showSignInView)
            }
        label:{
            Text("Sing in with email")
                .bold()
                .font(.title)
             
        }
            
            Image(systemName: "AppIcon")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Nurture")
                .bold()
                .font(.largeTitle)
                .fontDesign(monospaced() as? Font.Design)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
