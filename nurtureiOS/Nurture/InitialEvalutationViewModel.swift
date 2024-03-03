//
//  InitialEvalutationViewModel.swift
//  Nurture
//
//  Created by Pranav Chunchur on 02/03/24.
//

import Foundation

class InitialEvalutationViewModel: ObservableObject{
  
    @Published var assessment : [EvalMethod] = []
    func initialEvalFetchQuestions() async throws {
        
        let url = URL(string:"https://mank.devscene.co/assessment/depression")!
        
        var request = URLRequest(url:url)
        request.httpMethod = "GET"
        
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let error = error{
                print("Kill yourself because \(error.localizedDescription)")
                return
                
            }else if let HttpResponse = response as? HTTPURLResponse {
                if(HttpResponse.statusCode == 200){
                    if let data = data,
                       let decodeResult = try? JSONDecoder().decode([EvalMethod].self, from: data),
                       let result = try? JSONSerialization.jsonObject(with: data, options: []) as? [String:Any]{
                        print("SUCCESS")
                        print(decodeResult)
                        self.assessment = decodeResult
                    }
                   
                    
                }
            }
        }
        task.resume()
    }
}
