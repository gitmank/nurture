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
    @Binding var type : String
    @State var questionnaire: [String:String] = [:]
    @State var selectedOption: [Int] = Array(repeating: -1, count: 9)
    @State var currentQuestionIndex = 0
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        NavigationStack{
            VStack(alignment: .leading){
                Text(type)
                    .font(.title2)
                    .italic()
                    .padding(.init(top: 0, leading: 30, bottom: 0, trailing: 20))
                Divider()
                
                
                if !questions.isEmpty && currentQuestionIndex < questions.count {
                    let question = questions[currentQuestionIndex]
                    
                    ZStack {
                        RoundedRectangle(cornerRadius: 25.0)
                            .foregroundStyle((Color(uiColor: UIColor(hex: "F8F8F8")!)))
                            .shadow(color: .gray, radius: 3, x:-5,y:5)
                            .frame(width:385, height: 250)
                            .padding(.init(top: 0, leading: 20, bottom: 10, trailing: 20))
                        
                        Text(question) // Display each item in the arr array
                            .font(.title2)
                            .fontWeight(.semibold)
                            .padding(.init(top: 2, leading: 5, bottom: 200, trailing: 0))
                            .multilineTextAlignment(/*@START_MENU_TOKEN@*/.leading/*@END_MENU_TOKEN@*/)
    
                        VStack{
                            ForEach(options.indices, id: \.self) { index in
                                let option = options[index]
                                
                                radioButtonView(questionIndex: currentQuestionIndex,currentquestion: $currentQuestionIndex, optionIndex: index, options: option, selectedIndex: $selectedOption)
                                    .font(.title3)
                 
                            }
                        }
                    }
                    
                } else {
 
                    ZStack{
                        RoundedRectangle(cornerRadius: /*@START_MENU_TOKEN@*/25.0/*@END_MENU_TOKEN@*/)
                            .foregroundStyle((Color(uiColor: UIColor(hex: "F8F8F8")!)))
                            .shadow(color: .gray, radius: 3, x:-5,y:5)
                            .frame(width:385, height: 300)
                            .padding(.init(top: 0, leading: 20, bottom: 10, trailing: 20))
                        
                        VStack{
                            Text("THANK YOU FOR YOUR RESPONSE! 😊 \n ")
                                .fontWeight(.semibold)
                                .padding(.bottom,20)
                            Text("You can come back here and attempt it again \n And remember... \n We'll always be here for you :)")
                                .multilineTextAlignment(.leading)
                        }
                    }
                    Spacer()
                   
                    Button {
                        Task {
                            do {
                                try await viewModel.sendInitialEvalResponses(selectedOption, type)
                                dismiss()
                            } catch {
                                print("Error sending data: \(error)")
                            }
                        }
                    } label: {
                        Text("Submit")
                            .background(
                                RoundedRectangle(cornerRadius: 10)
                                    .frame(width: 150, height: 50, alignment: .center)
                                    .foregroundStyle(Color(uiColor: .systemGreen))
                            )
                            .foregroundColor(Color.white)
                            .font(.title2)
                    }
                    .padding(.leading, 175)
                    Spacer()
                    Text("Asking for help isnt giving up, it's giving up")
                        .fontWeight(.semibold)
                        .italic()
                        .padding(.leading,40)
                        .multilineTextAlignment(.center)
                    
                }
                
                Spacer()
          
                    .navigationTitle("Inital Evaluation")
                
            }
            .onAppear {
                if type == "depression" {
                    viewModel.initialEvalFetchQuestions(type) // Fetch questions when view appears
                } else if type == "anxiety" {
                    viewModel.initialEvalFetchQuestions(type)
                }
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
    @Binding var currentquestion : Int
    var optionIndex: Int
    var options: String
    @Binding var selectedIndex: [Int]
    
    var body: some View {
        VStack(alignment: .leading){
            Button(action:
                    {
                selectedIndex[questionIndex] = optionIndex
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    currentquestion += 1
                }
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
    InitialEvaluationView(type: .constant("depression"))
}

