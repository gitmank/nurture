//
//  InitialEvalutationViewModel.swift
//  Nurture
//
//  Created by Pranav Chunchur on 02/03/24.
//

import Foundation
import Firebase
import FirebaseAuth

class InitialEvalutationViewModel: ObservableObject{
  
    @Published var fetchedResult: [String: Any]?
    func initialEvalFetchQuestions(_ type: String) {
        
        let url = URL(string:"https://mank.devscene.co/assessment/\(type)")!
        
        var request = URLRequest(url:url)
        request.httpMethod = "GET"
        
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let error = error{
                print("Kill yourself because \(error.localizedDescription)")
                return
                
            }else if let HttpResponse = response as? HTTPURLResponse {
                if(HttpResponse.statusCode == 200){
                    if let data = data,
                      
                       let result = try? JSONSerialization.jsonObject(with: data, options: []) as? [String:Any]{
                        print("SUCCESS")
                        print(result)
                        self.fetchedResult = result
                  
                    }
                }
            }
        }
        task.resume()
    }
    
    func sendInitialEvalResponses(_ responses: [Int], _ type: String) async throws {
        let url = URL(string: "https://mank.devscene.co/assessment/\(type)")!
        
        //Firebase token for user
        guard let tokenId = try await Auth.auth().currentUser?.getIDToken() else{
            return
        }

        //data to send
        let dataTosend: [String: Any] = ["responses":responses]
        
        do{
            let jsonData = try JSONSerialization.data(withJSONObject: dataTosend, options: [])
            
            var request = URLRequest(url:url)
            request.httpMethod = "POST"
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
            request.setValue("Bearer \(tokenId)", forHTTPHeaderField: "Authorization")
            request.httpBody = jsonData
            
            let task = URLSession.shared.dataTask(with: request) { data, response, error in
                if let error = error{
                    print("Error sending data: \(error)")
                } else if let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200{
                    print("Data sent successfully")
                    print(httpResponse.statusCode)
                }
            }
            
            task.resume()
        } catch{
            print ("error serializing data: \(error)")
        }
        
        
                
                
       
        
        
    }
}
