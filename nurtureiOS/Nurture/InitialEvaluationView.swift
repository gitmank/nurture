//
//  InitialEvaluationView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI



struct InitialEvaluationView: View {
    @StateObject var viewModel = InitialEvalutationViewModel()
    @State var arr : [String] = []
    @State var arr1 : [String] = []

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
                     
                        ForEach(arr, id: \.self) { item in
                            Text(item) // Display each item in the arr array
                                .font(.title2)
                                .bold()
                                .padding(.init(top: 10, leading: -10, bottom: 10, trailing: 0))
                        }
                     ForEach(arr1, id: \.self) { item in
                         Text(item) // Display each item in the arr array
                             .font(.title2)
                             .bold()
                             .padding(.init(top: 10, leading: -10, bottom: 10, trailing: 0))
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
             
                .navigationTitle("Inital Evaluation")

            }
            .onAppear {
                viewModel.initialEvalFetchQuestions() // Fetch questions when view appears
            }
            .onReceive(viewModel.$fetchedResult){ fetchedResult in
                if let questions = fetchedResult?["questions"] as? [String] {
                    arr = questions
                }
                if let options = fetchedResult?["options"] as? [String] {
                    arr1 = options
                }
            }
        }
    }
}
    
#Preview {
        InitialEvaluationView()
    }

