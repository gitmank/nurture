//
//  ProfileView.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI
import Charts

struct mood: Identifiable {
    let id = UUID()
    let title: String
    let score: Double
}

struct ProfileView: View {
    @State private var name: String = ""
    @State private var school: String = ""
    @State private var age: String = ""
    @State private var moods : [String] = ["Depression","Depression","Depression"]
    @State private var Moods : [mood] = [
        .init(title: "Anxiety", score: 0.8),
        .init(title: "Depression", score: 0.2)
    ]
    private let dateformatter: DateFormatter = {
       let formatter = DateFormatter()
        formatter.dateFormat = "dd"
        return formatter
    }()
    
    private let dayformatter: DateFormatter = {
       let formatter = DateFormatter()
        formatter.dateFormat = "EEE"
        return formatter
    }()
    private var getCurrentWeekDate: [Date] {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: Date())
        let weekDay = calendar.component(.weekday, from: today)
        let startOfWeek = calendar.date(byAdding: .day, value: -weekDay + 1, to: today)!
        return (0..<7).map { calendar.date(byAdding: .day, value: $0, to: startOfWeek)!}
    }
    @State private var selectedDate : Date?
    var body: some View {
        NavigationStack{
        GeometryReader{ geo in
            VStack {
                Text("Profile")
                HStack{
                    Image(systemName: "person.circle")
                        .font(.custom("cabin", size: 100))
                    VStack{
                        TextField("Enter your name", text: $name)
                        TextField("School", text: $school)
                        TextField("Age", text: $age)
                    }
                    
                }
                .padding()
                ZStack{
                    RoundedRectangle(cornerRadius: 10)
                        .shadow(radius: 20)
                        .foregroundStyle(Color.white)
                    Chart(Moods) { m in
                        SectorMark(angle: .value(Text(verbatim: m.title), m.score))
                            .foregroundStyle(by: .value(Text(verbatim: m.title), m.score))
                    }
                }
                .frame(width: 150, height: 150)
                
                ZStack{
                    RoundedRectangle(cornerRadius: 10)
                        .foregroundStyle(Color(uiColor: UIColor(hex: "D9D9D9")!))
                        .frame(width: UIScreen.main.bounds.width, height: 100)
                    VStack{
                        NavigationLink(destination: {}) {
                            Image(systemName: "chevron.right")
                                .padding()
                        }
                        HStack{
                            
                            ForEach(getCurrentWeekDate, id:\.self) { date in
                                NavigationLink(destination: {}) {
                                    VStack {
                                        Text(dateformatter.string(from: date))
                                        Text(dayformatter.string(from: date))
                                            .font(.caption)
                                        Text("✦")
                                    }
                                    .frame(width: 50, height: 75)
                                    .foregroundStyle(Color.black)
                                    .background { RoundedRectangle(cornerRadius: 20)
                                        .fill(selectedDate == date ? Color.gray : Color.clear)}
                                    .onTapGesture {
                                        selectedDate = date
                                    }
                                    
                                }
                                Spacer()
                            }
                            .frame(width: 25)
                        }
                        }
              
                }
                VStack {
                    Text("Moods")
                        .padding(.leading, -150)
                    
                    Text("Take Initial Assessment")
                        .padding(.trailing, -200)
                    HStack{
                        ForEach(moods, id:\.self){ mood in
                            ZStack {
                                RoundedRectangle(cornerRadius: 15)
                                    .foregroundColor(.white)
                                    .frame(width:90,height: 90)
                                VStack {
                                    Image(mood)
                                        .resizable()
                                        .aspectRatio(contentMode: .fit)
                                        .frame(width: 75, height: 75)
                                    Text(mood)
                                        .foregroundColor(.black)
                                        .font(.headline)
                                }
                            }
                        }
                        
                    }
                }
                .background {
                    RoundedRectangle(cornerRadius: 10)
                        .frame(width: 375, height: 175)
                        .foregroundStyle(Color(uiColor: UIColor(hex: "D9D9D9")!))
                }
                Spacer()
                Section {
                    Button(action: {}) {
                        Text("Log Out")
                    }
                }
                .background(Color.green)
                
            }
            .frame(width: geo.size.width, height: geo.size.height)
        }
    }
    }
}

#Preview {
    ProfileView()
}
