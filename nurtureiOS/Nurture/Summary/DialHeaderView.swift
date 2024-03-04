//
//  DialHeaderView.swift
//  Nurture
//
//  Created by Pranav Chunchur on 02/03/24.
//

import Foundation
import SwiftUI

struct DialHeaderView: View {
    var body: some View{
        ZStack{
                HStack(alignment: .top){
                    VStack(alignment: .leading, spacing:10){
                        Text("Hey, FIRST NAME")
                            .font(/*@START_MENU_TOKEN@*/.title/*@END_MENU_TOKEN@*/)
                            .bold()
                            .foregroundStyle(Color.black)
                        Text("LASTNAME")
                            .foregroundStyle(Color.gray)
                            .font(.title2)
                    }
                    Spacer()
                
            }
        }
    }
}

