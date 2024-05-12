//
//  CalendarView.swift
//  Nurture
//
//  Created by swayam on 02/03/24.
//

import SwiftUI

struct CalendarView: View {
    let demoEmojiData : [String: Double] = [ "May 1" : 0.2, "May 2" : 0.6, "May 3" : 0.4,"May 4" : 0.9,"May 5" : 0.1, "May 6" : 0.3, "May 7" : 0.7]
    var body: some View {
        GeometryReader { geo in
            VStack {
                Text("History")
                    .font(.title2)
                    .foregroundStyle(.black)
                    .bold()
                    .padding(.init(top: 20, leading: 0, bottom: 0, trailing: 120))
                ForEach(demoEmojiData.sorted(by: { $0.key < $1.key }), id: \.key) { date, value in
                    HStack {
                        Text(date)
                            .padding()
                        EmojiRatingView(decimalVal: value)
                            .padding()
                    }
                    .background(background(value))
                    .padding()
                }
                Spacer()
            }
            .frame(width: geo.size.width,height: geo.size.height)
        }
    }
    
    func background(_ value: Double) -> Color {
        switch value {
                case 0..<0.2:
                    return Color.red.opacity(0.3)
                case 0.2..<0.4:
                    return Color.orange.opacity(0.3)
                case 0.4..<0.6:
                    return Color.yellow.opacity(0.3)
                case 0.6..<0.8:
                    return Color.green.opacity(0.3)
                case 0.8...1:
                    return Color.blue.opacity(0.3)
                default:
                    return Color.gray.opacity(0.3)
                }
    }
}

struct EmojiRatingView : View {
    let decimalVal: Double
    var body: some View {
        switch decimalVal {
        case 0..<0.2:
            return Text("😞")
        case 0.2..<0.4:
            return Text("😐")
        case 0.4..<0.6:
            return Text("😊")
        case 0.6..<0.8:
            return Text("😄")
        case 0.8...1:
            return Text("😇")
        default:
            return Text("😐")
        }
    }
}

#Preview {
    CalendarView()
}
