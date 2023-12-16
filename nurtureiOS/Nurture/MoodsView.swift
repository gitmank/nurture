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
                MoodButton(imageName: "Depression", moodText: "Depression")
                MoodButton(imageName: "Anxiety", moodText: "Anxiety")
            }
        }
        
    }
}

struct MoodButton: View {
    let imageName: String
    let moodText: String
    
    var body: some View {
        NavigationLink(destination: QuestionaireView(selectedMood: moodText)) {
            ZStack {
                RoundedRectangle(cornerRadius: 15)
                    .foregroundColor(.blue)
                    .frame(width:220,height: 200)
                VStack {
                    Image(imageName)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 200, height: 150)
                    Text(moodText)
                        .foregroundColor(.white)
                        .font(.headline)
                }
            }
        }
        .padding()
    }
}
#Preview {
    MoodsView()
}
