const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder,
    PermissionsBitField
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("unlock")
      .setDescription("unlocks channel")
      .addChannelOption((option) =>
        option.setName("channel").setDescription("Select a channel")
        .setRequired(true)
      )
      .setDEfaultMemberPermissions(PermissionFlagsBits.Administrator),
  
    async execute(interaction, client) {
      const channel = interaction.options.getChannel("channel");
  
      const succesEmbed = new EmbedBuilder()
        .setColor(0xd98832)
        .setTitle(":unlock: Unlocked!")
        .setDescription(`Channel succesfully unlocked.`);
  
      await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
        SendMessages: true,
        AttachFiles: true,
      });
  
      await channel.permissionOverwrites.edit(
        "1008745719705907241",
        {
          SendMessages: true,
          AttachFiles: true,
        }
      );
  
      await interaction.reply({
        embeds: [succesEmbed],
      });
    },
  };
  