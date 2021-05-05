class FilmsController < ApplicationController
  before_action :set_film, only:[:show,:update,:destroy]

def index
  #simple due to no nesting
  @films=Film.all
  render json:@films
end

# GET /users/1
def show
  render json:@film
end

# POST /users

def create
  @film = Film.new(film_params)
  if @film.save
  render json: @film,status: :created
  else
    render json: @film.errors ,status: :unprocessable_entity
  end
end

# PUT AKA UPDATE /users/1
#Find the ID, and then update the id..
#Must use params always
def update
  #@user = User.find(params[:id])
  
  if @film.update(film_params)
  render JSON: @film
  else
    render JSON: @film.errors, status: :unprocessable_entity
end
end

# DELETE /users/1
#No rendering since we destroy it
def destroy
  #@user=User.find(params[:id])
  
  @film.destroy
  puts "Destroyed"

end


#private is useful to keep here for our set_user
private
#this method finds a single user in the database
def set_film
  @film=Film.find(params[:id])
end
#permit will ONLY  ALLOW YOU TO return name,age from the .user schema.. nothing else 
#.require will take in :user because we are in the user controller.. 
#require: if we were in post controller we should do params.require(:post)
def film_params
  params.require(:film).permit(:name,:release,:img,:trailer,:category)
end
end
