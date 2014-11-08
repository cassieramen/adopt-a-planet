require 'csv'
require 'mongoid'
Mongoid.load!(File.join('config','mongoid.yml'), :development)

class Planet
  include Mongoid::Document

  field :mass, type: Float
  field :orbital_period, type: Float
  field :radius, type: Float
  field :year_discovered, type: Integer
  field :dist_from_earth, type: Float
  field :temp, type: Float
  field :name, type: String
  store_in collection: "planets"
end

CSV.foreach("./exoplanets2.csv", headers: true).map do |row|
  a = Planet.new
  a.mass = row["P. Mass (EU)"].to_f
  a.orbital_period = row["P. Period (days)"].to_f
  a.radius = row["P. Radius (EU)"].to_f
  a.year_discovered = row["P. Disc. Year"].to_i
  a.dist_from_earth = row["S. Distance (pc)"].to_f
  a.temp = row["S. Teff (K)"].to_f
  a.name = row["P. Name"].to_s
  a.save()
end

