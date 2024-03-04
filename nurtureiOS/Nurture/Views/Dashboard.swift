//
//  Dashboard.swift
//  Nurture
//
//  Created by swayam on 29/02/24.
//

import SwiftUI

struct Dashboard: View {
    @State var selectedTab: Int
    @State private var showCheckInView = false
    
    var body: some View {
        ZStack(alignment: .bottom) {
            TabView(selection: $selectedTab) {
                HomeView()
                    .tag(0)
                CalendarView()
                    .tag(1)
                DailyCheckInView()
                    .tag(2)
                ProfileView()
                    .tag(3)
            }
            RoundedRectangle(cornerRadius: 2)
                .foregroundStyle(Color(uiColor: UIColor(hex:"F8F8F8")!))
                .frame(maxWidth: .infinity, maxHeight: 70)
                .padding(.bottom,-35)
                .overlay {
                    HStack {
                        Button(action: {selectedTab = 0})
                        {
                            RoundedRectangle(cornerRadius: 10)
                                .fill(selectedTab == 0 ? Color(uiColor: UIColor(hex: "2EC9FB")!) : Color.clear)
                                .frame(width: 45, height: 45)
                                .overlay {
                                    Image(systemName: "house.fill")
                                        .foregroundStyle(Color.black)
                                        .font(.title)
                                }
                        }
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                        Button(action: {selectedTab = 1})
                        {
                            RoundedRectangle(cornerRadius: 10)
                                .fill(selectedTab == 1 ? Color(uiColor: UIColor(hex: "2EC9FB")!) : Color.clear)
                                .frame(width: 45, height: 45)
                                .overlay {
                                    Image(systemName: "calendar.badge.clock")
                                        .foregroundStyle(Color.black)
                                        .font(.title)
                                }
                        }
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                        Button(action: {selectedTab = 2})
                        {
                            RoundedRectangle(cornerRadius: 10)
                                .fill(selectedTab == 2 ? Color(uiColor: UIColor(hex: "2EC9FB")!) : Color.clear)
                                .frame(width: 45, height: 45)
                                .overlay {
                                    Image("checkInIcon")
                                        .foregroundStyle(Color.black)
                                        .font(.title)
                                }
                        }
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                        Button(action: { selectedTab = 3 })
                        {
                            RoundedRectangle(cornerRadius: 10)
                                .fill(selectedTab == 3 ? Color(uiColor: UIColor(hex: "2EC9FB")!) : Color.clear)
                                .frame(width: 45, height: 45)
                                .overlay {
                                    Image(systemName: "person.fill")
                                        .foregroundStyle(Color.black)
                                        .font(.title)
                                }
                        }
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                    }
                    .padding()
                }
        }
    }
}

#Preview {
    Dashboard(selectedTab: 0)
}
