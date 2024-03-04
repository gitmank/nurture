//
//  ProfileView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI

struct ProfileView: View {
    @State private var name: String = ""
    @State private var school: String = ""
    @State private var age: String = ""
    @State private var moods : [String] = ["Depression","Depression","Depression"]
    var body: some View {
        NavigationStack{
        GeometryReader{ geo in
            VStack {
                Text("Profile")
                HStack{
                    Image(systemName: "person.circle")
                        .font(.custom("cabin", size: 100))
                    VStack{
                        TextField("Enter your name", text: $name)
                        TextField("School", text: $school)
                        TextField("Age", text: $age)
                    }
                    
                }
                .padding()
                VStack {
                    Text("Moods")
                        .padding(.leading, -150)
                    
                    Text("Take Initial Assessment")
                        .padding(.trailing, -200)
                    HStack{
                        ForEach(moods, id:\.self){ mood in
                            ZStack {
                                RoundedRectangle(cornerRadius: 15)
                                    .foregroundColor(.white)
                                    .frame(width:90,height: 90)
                                VStack {
                                    Image(mood)
                                        .resizable()
                                        .aspectRatio(contentMode: .fit)
                                        .frame(width: 75, height: 75)
                                    Text(mood)
                                        .foregroundColor(.black)
                                        .font(.headline)
                                }
                            }
                        }
                        
                    }
                }
                .background {
                    RoundedRectangle(cornerRadius: 10)
                        .frame(width: 375, height: 175)
                        .foregroundStyle(Color(uiColor: UIColor(hex: "D9D9D9")!))
                }
                Spacer()
                Section {
                    Button(action: {}) {
                        Text("Log Out")
                    }
                }
                .background(Color.green)
                
            }
            .frame(width: geo.size.width, height: geo.size.height)
        }
    }
    }
}

#Preview {
    ProfileView()
}
