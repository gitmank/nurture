//
//  InitialEvaluationView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI



struct InitialEvaluationView: View {
    @StateObject var viewModel = InitialEvalutationViewModel()
    @State var questions : [String] = []
    @State var options : [String] = []
    @State var type : String = ""
    @State var questionnaire: [String:String] = [:]
    @State var selectedOption: [Int] = Array(repeating: -1, count: 9)
    
    var body: some View {
        NavigationStack{
            VStack(alignment: .leading){
                Text(type)
                    .font(.title2)
                    .italic()
                    .padding(.init(top: 0, leading: 30, bottom: 0, trailing: 20))
                Divider()
                
                ScrollView {
                    ForEach(questions.indices, id: \.self) { questionIndex in
                        let question = questions[questionIndex]
                        
                        ZStack {
                            RoundedRectangle(cornerRadius: 25.0)
                                .foregroundStyle((Color(uiColor: UIColor(hex: "F8F8F8")!)))
                                .shadow(color: .gray, radius: 3, x:-5,y:5)
                                .frame(width:385, height: 250)
                                .padding(.init(top: 0, leading: 20, bottom: 10, trailing: 20))
                            
                            
                            Text(question) // Display each item in the arr array
                                .font(.title2)
                                .bold()
                                .padding(.init(top: 2, leading: 10, bottom: 200, trailing: 5))
                                
                                
                            
                            
                            
                            
                            VStack{
                                ForEach(options.indices, id: \.self) { index in
                                    let option = options[index]
                                    
                                    radioButtonView(questionIndex: questionIndex,optionIndex: index, options: option, selectedIndex: $selectedOption)
                                        .font(.title3)
                                        

                                }
                                
                            }
                        }
                        
                    }
                    
                }
                Spacer()
                NavigationLink(destination:{EvaluationSummaryView()}){
                    Button {
                        Task {
                            do {
                                try await viewModel.sendInitialEvalResponses(selectedOption)
                            } catch {
                                print("Error sending data: \(error)")
                            }
                        }
                    } label: {
                        Text("Submit")
                            .background(
                                RoundedRectangle(cornerRadius: 25)
                                    .frame(width: 100, height: 40, alignment: .center)
                                    .foregroundStyle(Color.blue)
                            )
                            .foregroundColor(Color.white)
                            .font(.title3)
                    }
                    .padding(.leading, 175)
                }
                
                .navigationTitle("Inital Evaluation")
                
                
            }
            .onAppear {
                viewModel.initialEvalFetchQuestions() // Fetch questions when view appears
            }
            .onReceive(viewModel.$fetchedResult){ fetchedResult in
                if let question = fetchedResult?["questions"] as? [String] {
                    questions = question
                }
                if let option = fetchedResult?["options"] as? [String] {
                    options = option
                }
                if let assessmentType = fetchedResult?["type"] as? String{
                    type = assessmentType
                }
                
            }
        }
    }
    
}

struct radioButtonView: View {
    var questionIndex : Int
    var optionIndex: Int
    var options: String
    @Binding var selectedIndex: [Int]
    
    var body: some View {
        VStack(alignment: .leading){
            Button(action:
                    {
                selectedIndex[questionIndex] = optionIndex
                print(selectedIndex)
            }){
                HStack{
                    Image(systemName: selectedIndex[questionIndex] == optionIndex ? "largecircle.fill.circle" : "circle")
                        .foregroundColor(Color(uiColor: UIColor(hex: "2EC9FB")!))
                        .frame(height: 10)
                        .padding(.init(top: 10, leading: -10, bottom: 2, trailing: 0))
                    
                    Text(options)
                        .foregroundStyle(.black)
                        .frame(width:275, height: 20)
                    
                    
                    
                    
                }
            }
            
        }
        .padding([.top],10)
        
    }
        
}

#Preview {
    InitialEvaluationView()
}

