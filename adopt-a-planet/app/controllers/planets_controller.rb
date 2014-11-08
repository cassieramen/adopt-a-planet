class PlanetsController < ApplicationController
  def edit
    @planet = Planet.find(params[:id])
  end

  def update
    @planet = Planet.find(params[:id])
    @planet.update(planet_params)
    redirect_to planet_path(@planet)
  end

  def show
    @planet = Planet.find(params[:id])
  end

  private

  def planet_params
    params.require(:planet).permit(:claimed_by, :claimed_name)
  end
end
