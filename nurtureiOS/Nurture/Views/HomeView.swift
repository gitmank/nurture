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
                        .font(.largeTitle)
                        .bold()
                        .foregroundStyle(.black)
                    Divider()
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
            }
        }
  
    }
}

#Preview {
    HomeView()
}
