//
//  QuestionaireView.swift
//  Nurture
//
//  Created by swayam on 15/12/23.
//

import SwiftUI

struct QuestionaireView: View {
    @State var selectedMood = ""
       @State private var feelingRating = 3
       @State private var botheringRating = 3
       @State private var sleepAndMealsRating = 3
       @State private var selfHarmThoughtsRating = 3
       @State private var professionalHelpRating = 3
    var body: some View {
        @State var selectedRating = 3
        NavigationView {
            ScrollView{
                VStack(alignment: .center, spacing: 20) {
                    Text(selectedMood)
                    Text("How are you feeling today?")
                    
                    Picker("", selection: $feelingRating) {
                        ForEach(1..<6) { index in
                            Text("\(self.emoji(for: index))")
                                .tag(index)
                        }
                    }
                    .pickerStyle(SegmentedPickerStyle())
                    .padding(.horizontal, 20)
                    
                    Text("Is there anything specific that's been bothering you?")
                    
                    Picker("", selection: $botheringRating) {
                        ForEach(1..<6) { index in
                            Text("\(self.emoji(for: index))")
                                .tag(index)
                        }
                    }
                    .pickerStyle(SegmentedPickerStyle())
                    .padding(.horizontal, 20)
                    Text("Have you been sleeping well or eating regular meals?")
                    
                    Picker("", selection: $sleepAndMealsRating) {
                        ForEach(1..<6) { index in
                            Text("\(self.emoji(for: index))")
                                .tag(index)
                        }
                    }
                    .pickerStyle(SegmentedPickerStyle())
                    .padding(.horizontal, 20)
                    Text("Have you ever thought about hurting yourself or someone else?")
                    
                    Picker("", selection: $selfHarmThoughtsRating) {
                        ForEach(1..<6) { index in
                            Text("\(self.emoji(for: index))")
                                .tag(index)
                        }
                    }
                    .pickerStyle(SegmentedPickerStyle())
                    .padding(.horizontal, 20)
                    Text("Are you interested in getting professional help?")
                    
                    Picker("", selection: $professionalHelpRating) {
                        ForEach(1..<6) { index in
                            Text("\(self.emoji(for: index))")
                                .tag(index)
                        }
                    }
                    .pickerStyle(SegmentedPickerStyle())
                    .padding(.horizontal, 20)
                    
                    
            }
                Button(action: {
                    print("Form Submitted")
                }) {
                    Text("Submit")
                }
                    }
                    .padding()
                    .navigationTitle("Questionnaire")
                }
        Spacer()

    }
    
    func emoji(for index: Int) -> String {
            // Assign emojis based on the scale
            switch index {
            case 1:
                return "😡"
            case 2:
                return "😕"
            case 3:
                return "😐"
            case 4:
                return "🙂"
            case 5:
                return "😁"
            default:
                return ""
            }
        }
}

#Preview {
    NavigationStack{
        QuestionaireView()
    }
  
}
