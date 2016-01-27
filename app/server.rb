require 'sinatra'
require 'soundcloud'

set :public_dir, Proc.new { File.join(root, "..", "public") }

get '/' do
  erb :monday
end

get '/monday' do
  erb :monday
end


get '/tuesday' do
  erb :tuesday
end


get '/wednesday' do
  erb :wednesday
end


get '/thursday' do
  erb :thursday
end


get '/friday' do
  erb :friday
end


get '/saturday' do
  erb :saturday
end


get '/sunday' do
  erb :sunday
end

private

