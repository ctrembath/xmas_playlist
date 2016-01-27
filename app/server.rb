require 'sinatra'
require 'soundcloud'
require 'date'

set :public_dir, Proc.new { File.join(root, "..", "public") }

get '/' do
  # date_today
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


def date_today  
  @date = Date.today
  @day = @date.strftime('%A')

  if @day == 'Monday'
    puts 'MONDAY'
    erb :monday
  elsif @day == 'Tuesday'
    puts 'TUESDAY'
    erb :tuesday
  elsif @day == 'Wednesday'
    puts 'WEDNESDAY'
    erb :wednesday
  elsif @day == 'Thursday'
    puts 'THURSDAY'
    erb :thursday
  elsif @day == 'Friday'
    puts 'FRIDAY'
    erb :friday
  else
    puts 'NO DAY'
    erb :monday
  end
end











