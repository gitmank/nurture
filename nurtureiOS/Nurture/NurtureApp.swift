//
//  NurtureApp.swift
//  Nurture
//
//  Created by Pranav Chunchur on 06/11/23.
//

import SwiftUI
import Firebase
import FirebaseAuth

@main
struct NurtureApp: App {
    
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate
    var body: some Scene {
        WindowGroup {
            NavigationStack{
                if Auth.auth().currentUser == nil {
                    OnboardingScreen()
                } else {
                    Dashboard(selectedTab: 0)
                }
            }
        }
    }
}

class AppDelegate: NSObject, UIApplicationDelegate{
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool{
        FirebaseApp.configure()
        print("Firebase Configured")
        
        return true
    }
}
