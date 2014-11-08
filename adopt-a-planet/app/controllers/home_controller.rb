class HomeController < ApplicationController
  def index
    @planet = Planet.all.sample.name

  end
end
