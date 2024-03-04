//
//  OnboardingScreen.swift
//  Nurture
//
//  Created by swayam on 26/02/24.
//

import SwiftUI

struct OnboardingScreen: View {
    @State private var showForgotPasswordView = false
    
    var body: some View {
        NavigationStack{
            GeometryReader{ geo in
                ZStack{
                    Color(uiColor: UIColor(hex: "FFFFFF")!)
                        .ignoresSafeArea()
                    VStack{
                        Image("icon 1")
                            .frame(width: 264, height: 311)
                            .padding(.top, 88)
                        NavigationLink(destination: LoginView() ){
                            Text("Login")
                                .font(.custom("Chenla", size: 16))
                                .foregroundStyle(Color.black)
                                .background {
                                    RoundedRectangle(cornerRadius: 10)
                                        .foregroundStyle(Color(uiColor: UIColor(hex: "2EC9FB")!))
                                        .frame(width: 250, height: 40)
                                }
                        }
                        .padding(.top,40)
                        NavigationLink(destination: LoginView()) {
                            Text("Sign Up")
                                .font(.custom("Chenla", size: 16))
                                .foregroundStyle(Color.black)
                                .background {
                                    RoundedRectangle(cornerRadius: 10)
                                        .foregroundStyle(Color(uiColor: UIColor(hex: "2EC9FB")!))
                                        .frame(width: 250, height: 40)
                                }
                        }
                        .padding(.top,40)
                        Button(action: {
                            showForgotPasswordView = true
                        }) {
                            Text("Forgot Password ?")
                                .underline()
                                .font(.custom("Chenla", size: 14))
                                .foregroundStyle(Color.black)
                        }
                        .padding(.leading,-120)
                        .padding(.top,10)
                        
                        Spacer()
                        Text("Dont Forget to SMILE :)")
                            .foregroundStyle(Color.black)
                            .font(.custom("Chenla", size: 14))
                    }
                    .frame(width: geo.size.width, height: geo.size.height)
                    
                    if showForgotPasswordView {
                        Color(.black)
                            .opacity(0.3)
                            .edgesIgnoringSafeArea(.all)
                            .onTapGesture {
                                withAnimation {
                                    showForgotPasswordView = false
                                }
                            }
                        VStack {
                            Spacer()
                            ForgotPasswordView()
                                .transition(.move(edge: .bottom))
                                .animation(.easeInOut)
                                .frame(width: UIScreen.main.bounds.width, height: 270)
                                .cornerRadius(16)
                        }
                    }
                }
            }
        }
    }
}

#Preview {
    OnboardingScreen()
}
