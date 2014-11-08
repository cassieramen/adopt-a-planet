class Planet
  include Mongoid::Document

  field :name, type: String
  field :x, type: Float
  field :y, type: Float
  field :url, type: String
  field :claimed_by, type: String
  field :claimed_name, type: String
end
