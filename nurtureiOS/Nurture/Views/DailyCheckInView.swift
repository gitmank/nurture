import SwiftUI

struct DailyCheckInView: View {
    @State private var mood = "Happy"
    @State private var speed = 50.0 // State to track the slider value
    
    var body: some View {
        GeometryReader { geo in
            VStack {
                Text("Daily Check In")
                    .font(.title)
                    .bold()
                    .padding(.init(top: 0, leading: 30, bottom: 0, trailing: 50))
                Divider()
                
                Spacer()
                Text("How would you rate your day?")
                    .font(.title3)
                HStack {
                    Text("😔")
                    Slider(value: $speed, in: 0...100, step: 5)
                    Text("☺️")
                }
                .padding(.horizontal)
                
                HStack {
                    Spacer()
                    Text("☹️")
                    Spacer()
                    Text("😐")
                    Spacer()
                    Text("😌")
                    Spacer()
                }
                
                Spacer()
                
                RoundedRectangle(cornerRadius: 25)
                    .foregroundColor(Color(uiColor: UIColor(hex: "F8F8F8")!))
                    .shadow(color: .gray, radius: 3, x: -5, y: 5)
                    .frame(width: geo.size.width - 40, height: 200)
                    .padding(.horizontal)
                    .overlay(
                        VStack {
                            Text("Why are you feeling this way today?")
                                .font(.title3)
                                .padding(.bottom, 20)
                            
                            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible())], spacing: 5) {
                                ForEach(1..<4) { index in
                                    moodButton(for: index)
                                }
                            }
                            .padding(.bottom, 5)
                            
                            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 2) {
                                ForEach(4..<6) { index in
                                    moodButton(for: index)
                                }
                            }
                            
                                .cornerRadius(10)
                        }
                    )
                
                Spacer()
                
                Button(action: {
                    submitCheckInData(tag: mood) // Pass the selected mood as the tag
                }) {
                    Text("Submit")
                        .background(
                            RoundedRectangle(cornerRadius: 10)
                                .frame(width: 150, height: 50, alignment: .center)
                                .foregroundStyle(Color(uiColor: .systemGreen))
                        )
                        .foregroundColor(Color.white)
                        .font(.title2)
                }
                .padding()
            }
            .padding()
            .frame(width: geo.size.width, height: geo.size.height)
        }
    }
    
    // Function to return emojis based on the scale
    func mood(for index: Int) -> String {
        switch index {
        case 1:
            return "Family"
        case 2:
            return "Friends"
        case 3:
            return "Food"
        case 4:
            return "Academics"
        case 5:
            return "Other"
        default:
            return ""
        }
    }
    
    func moodButton(for index: Int) -> some View {
        let moodText = mood(for: index)
        return Button(action: {
            // Handle button tap
            self.mood = moodText
        }) {
            Text(moodText)
                .padding(.horizontal, 10)
                .padding(.vertical, 5)
                .background(
                    RoundedRectangle(cornerRadius: 15)
                        .foregroundColor(Color.blue)
                )
                .foregroundColor(.white)
        }
    }
    
    // Function to submit the check-in data
    func submitCheckInData(tag: String) { // Accept the selected mood as a parameter
        // Prepare the URL
        guard let url = URL(string: "https://nurture.manomay.co/checkin") else {
            print("Invalid URL")
            return
        }
        
        // Prepare the request body
        let body: [String: Any] = [
            "value": speed,
            "tag": tag // Use the selected mood as the tag
        ]
        
        print(body)
        
        // Convert the request body to JSON data
        guard let jsonData = try? JSONSerialization.data(withJSONObject: body) else {
            print("Failed to serialize JSON data")
            return
        }
        
        // Prepare the URLRequest
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = jsonData
        
        // Perform the request
        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            if let error = error {
                print("Error: \(error)")
            } else if let data = data, let response = response as? HTTPURLResponse {
                print("Response status code: \(response.statusCode)")
                // Handle the response data if needed
            }
        }
        task.resume()
    }
}

struct DailyCheckInView_Previews: PreviewProvider {
    static var previews: some View {
        DailyCheckInView()
    }
}
