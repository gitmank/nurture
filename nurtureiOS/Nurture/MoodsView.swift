//
//  MoodsView.swift
//  Nurture
//
//  Created by swayam on 16/12/23.
//

import SwiftUI

struct MoodsView: View {
    var body: some View {
        NavigationView {
            
            VStack{
                Text("Moods")
                    .font(.largeTitle)
                MoodButton(imageName: "Depression", moodText: "depression")
                MoodButton(imageName: "Anxiety", moodText: "anxiety")
            }
        }
        
    }
}

struct MoodButton: View {
    let imageName: String
    @State var moodText: String
    
    var body: some View {
        NavigationLink(destination: InitialEvaluationView(type: $moodText)) {
            ZStack {
                RoundedRectangle(cornerRadius: 15)
                    .foregroundStyle(Color(uiColor: UIColor(hex: "f9f9f9")!))
                    .frame(width:315,height: 200)
                
                Image(imageName)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 275, height: 150)
    
                Text(moodText)
                    .foregroundColor(.blue)
                    .font(.headline)
                    .padding([.top], 180)
                    .padding([.trailing],150)
                
            }
        }
        .padding()
    }
}
#Preview {
    MoodsView()
}
