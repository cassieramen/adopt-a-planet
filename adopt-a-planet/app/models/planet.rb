class Planet
  include Mongoid::Document

  field :mass, type: Float
  field :orbital_period, type: Float
  field :radius, type: Float
  field :year_discovered, type: Integer
  field :dist_from_earth, type: Float
  field :temp, type: Float
  field :name, type: String
  field :claimed_by, type: String
  field :claimed_name, type: String

end
