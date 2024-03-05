//
//  HomeView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI
import Charts

struct HomeView: View {
   
    var body: some View {
        NavigationStack {
            GeometryReader{ geo in
                VStack {
                    Text("Take Initial Assessment")
                        .font(.title2)
                        .bold()
                        .foregroundStyle(.black)
                        .padding(.init(top: 20, leading: 0, bottom: 0, trailing: 120))
                    Text("\"You are stronger than you think, braver than you feel, and smarter than you know\" 😇")
                        .italic()
                        .frame(width: 350, height: 50, alignment: .leading)
                    
                    
                    MoodButton(imageName: "Depression", moodText: "depression")
                    MoodButton(imageName: "Anxiety", moodText: "anxiety")
                    Spacer()
                    
                }
                .background{
                    RoundedRectangle(cornerRadius: 10)
                        .foregroundStyle(Color(uiColor: UIColor(hex: "F9F9F9")!))
                }
       
                .frame(width: geo.size.width, height: geo.size.height)
                .navigationTitle("Home")
                Divider()
            }
        }
  
    }
}

#Preview {
    HomeView()
}
