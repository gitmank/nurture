//
//  EvaluationSummaryView.swift
//  Nurture
//
//  Created by Pranav Chunchur on 02/03/24.
//

import SwiftUI

struct EvaluationSummaryView: View {
    var body: some View {
        VStack{
            DialHeaderView()
                .padding(10)
            
            DialView()
                .padding(30)
            Spacer()
                .background(Color.gray)

        }
        .padding()
    }
}

struct DialView: View {
    var body: some View {
        ZStack{
            Circle().stroke(style: StrokeStyle(lineWidth: 5, dash: [1,2]))
                .blur(radius:0.5)
            Circle().fill(Color(uiColor: UIColor(hex: "F9F9F9")!))
                .shadow(color: .gray, radius: 5, x:-5,y:5)
                .shadow(color: .white, radius: 5, x:1,y:1)
                            
        }
        
    }
}



#Preview {
    EvaluationSummaryView()
}
