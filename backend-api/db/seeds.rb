# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Group.destroy_all
Member.destroy_all
Location.destroy_all
Event.destroy_all
Ticket.destroy_all
Photo.destroy_all
Review.destroy_all



10.times do |index|
    User.create!(
                 full_name:  Faker::Name.name,
                 username: Faker::Internet.username, 
                 password: "1234",
                 avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png")
end

10.times do |index|
    Location.create!(city: Faker::Address.city,
                     state: Faker::Address.state_abbr)
end

10.times do |index|
    Group.create!(location_id: Location.all.sample.id,
                   name: Faker::Team.name,
                   photo: "https://cdn0.iconfinder.com/data/icons/avatar-1-2/512/group-512.png",
                   description: "ABCD",
                   num_of_members: rand(1000))
end

10.times do |index|
    Member.create!(user_id: User.all.sample.id,
                   group_id: Group.all.sample.id)
end

10.times do |index|
    Event.create!(group_id: Group.all.sample.id,
                  location_id: Location.all.sample.id,
                  name: "Event Name",
                  photo: "Event Photo",
                  description: "Event Description",
                  date: Faker::Date.in_date_period(year: 2020, month: 9),
                  num_of_tickets: 50)
end

10.times do |index|
    Ticket.create!(user_id: User.all.sample.id,
                   event_id: Event.all.sample.id)
end

10.times do |index|
    Photo.create!(user_id: User.all.sample.id,
                  group_id: Group.all.sample.id,
                  img_url: "Photo")
end

10.times do |index|
    Review.create!(user_id: User.all.sample.id,
                   group_id: Group.all.sample.id,
                   comment: "Comment")
end