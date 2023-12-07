//
//  ContentView.swift
//  Nurture
//
//  Created by Pranav Chunchur on 06/11/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            
            Image(systemName: "AppIcon")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Nurture")
                .bold()
                .font(.largeTitle)
                .fontDesign(monospaced() as? Font.Design)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
