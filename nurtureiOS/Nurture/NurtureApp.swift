//
//  NurtureApp.swift
//  Nurture
//
//  Created by Pranav Chunchur on 06/11/23.
//

import SwiftUI
import Firebase


@main
struct NurtureApp: App {
    
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate
    var body: some Scene {
        WindowGroup {
            NavigationStack{
                AuthenticationView()
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
