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
                    .foregroundStyle(Color(uiColor: UIColor(hex: "D9D9D9")!))
                    .frame(width:300,height: 200)
                VStack {
                    Image(imageName)
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 275, height: 150)
                    Text(moodText)
                        .foregroundColor(.black)
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
