//
//  HomeView.swift
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

struct HomeView: View {
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
        NavigationStack {
            GeometryReader{ geo in
                VStack {
                    Text("Home")
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
                            NavigationLink(destination: CalendarView()) {
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
                    
                    
                    
                    Spacer()
                    Text("hi")
                }
                .frame(width: geo.size.width, height: geo.size.height)
            }
        }
    }
}

#Preview {
    HomeView()
}
