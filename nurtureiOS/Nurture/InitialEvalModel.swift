//
//  InitialEvalModel.swift
//  Nurture
//
//  Created by Pranav Chunchur on 03/03/24.
//

import Foundation

struct EvalMethod: Codable {
    let id, type: String
    let questions, options: [String]

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case type, questions, options
    }
}
