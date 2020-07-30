class Test::DatabasesController < ApplicationController
  def clean_database
    tables = ActiveRecord::Base.connection.tables
    tables.delete 'schema.migrations'
    tables.each do |t|
      ActiveRecord::Base.connection.execute("DELETE FROM #{t}")
      ActiveRecord::Base.connection.execute("DELETE FROM sqlite_sequence where name='#{t}'")
    end
    Rails.application.load_seed unless ['false', false].include?(params['should_seed'])
  end
end
