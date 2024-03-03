//
//  InitialEvaluationView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI



struct InitialEvaluationView: View {
    @StateObject var viewModel = InitialEvalutationViewModel()
    @State var arr = ["Kill yourself by Bo Burnham on YouTube by Google "]
//    , "Qeustion 2", "Question 3", "Question 4"
    var body: some View {
        NavigationStack{
            VStack{
                //           }
                //                if let questions = viewModel.assessment["questions"] as? [String?] {
                //                    let nonNilQuestions = questions.compactMap { $0 } // Filter out nil values
                //                    List {
                //                        ForEach(nonNilQuestions, id: \.self) { question in
                //                            Text(question)
                //                        }
                //                    }
                //                }
                //
                ZStack{
                    RoundedRectangle(cornerRadius: 25.0)
                        .foregroundStyle((Color(uiColor: UIColor(hex: "F8F8F8")!)))
                        .shadow(color: .gray, radius: 3, x:-5,y:5)
                        .frame(width:350, height: 400)
                        .padding(20)
                    
                    VStack {
                        ForEach(arr,id:  \.self){ x in
                            Text(arr[0])
                                .font(.title2)
                                .bold()
                                .padding(.init(top: 10, leading: -10, bottom: 10, trailing: 0))
                            
                        Rectangle()
                                .frame(width:300,  height: 275)
                            
                            
                        }
                        
                    }
                    Text("Option1")
                        .font(.title)
                        .foregroundStyle(.cyan)
                        .backgroundStyle(Color.cyan)
                }
                Spacer()
                NavigationLink(destination:{EvaluationSummaryView()}){
                        
                Button(action:{}){
                    Text("Next")
                        .background{
                            RoundedRectangle(cornerRadius: 25)
                                .frame(width: 100, height: 40, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                            .foregroundStyle(Color.blue)}
                            
                        }
                        .foregroundStyle(Color.white)
                        .font(.title3)
                    }
                .task{
                    do {
                        try await viewModel.initialEvalFetchQuestions()
                    } catch {
                        print("errr")
                    }
                }
                .navigationTitle("Inital Evaluation")

            }
        }
    }
}
    
#Preview {
        InitialEvaluationView()
    }

