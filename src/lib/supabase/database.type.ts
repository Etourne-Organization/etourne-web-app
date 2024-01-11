export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      AuditLogs: {
        Row: {
          executorId: number
          id: number
          log: string
          serverId: number
          timestamp: string
        }
        Insert: {
          executorId: number
          id?: number
          log: string
          serverId: number
          timestamp?: string
        }
        Update: {
          executorId?: number
          id?: number
          log?: string
          serverId?: number
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "AuditLogs_executorId_fkey"
            columns: ["executorId"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "AuditLogs_serverId_fkey"
            columns: ["serverId"]
            isOneToOne: false
            referencedRelation: "DiscordServers"
            referencedColumns: ["id"]
          }
        ]
      }
      BannedUsers: {
        Row: {
          created_at: string | null
          id: number
          isServerNoTeamEventBan: boolean
          isServerTeamEventBan: boolean
          serverId: number
          userId: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          isServerNoTeamEventBan: boolean
          isServerTeamEventBan: boolean
          serverId: number
          userId: number
        }
        Update: {
          created_at?: string | null
          id?: number
          isServerNoTeamEventBan?: boolean
          isServerTeamEventBan?: boolean
          serverId?: number
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "BannedUsers_serverId_fkey"
            columns: ["serverId"]
            isOneToOne: false
            referencedRelation: "DiscordServers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "BannedUsers_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      DiscordServers: {
        Row: {
          created_at: string | null
          id: number
          name: string
          serverId: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          serverId: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          serverId?: string
        }
        Relationships: []
      }
      Events: {
        Row: {
          channelId: string | null
          created_at: string | null
          dateTime: string
          description: string
          eventHost: string
          eventName: string
          gameName: string
          id: number
          isTeamEvent: boolean
          maxNumPlayers: number | null
          maxNumTeamPlayers: number | null
          maxNumTeams: number | null
          messageId: string | null
          serverId: number
          timezone: string
        }
        Insert: {
          channelId?: string | null
          created_at?: string | null
          dateTime: string
          description: string
          eventHost: string
          eventName: string
          gameName: string
          id?: number
          isTeamEvent: boolean
          maxNumPlayers?: number | null
          maxNumTeamPlayers?: number | null
          maxNumTeams?: number | null
          messageId?: string | null
          serverId: number
          timezone: string
        }
        Update: {
          channelId?: string | null
          created_at?: string | null
          dateTime?: string
          description?: string
          eventHost?: string
          eventName?: string
          gameName?: string
          id?: number
          isTeamEvent?: boolean
          maxNumPlayers?: number | null
          maxNumTeamPlayers?: number | null
          maxNumTeams?: number | null
          messageId?: string | null
          serverId?: number
          timezone?: string
        }
        Relationships: [
          {
            foreignKeyName: "Events_serverId_fkey"
            columns: ["serverId"]
            isOneToOne: false
            referencedRelation: "DiscordServers"
            referencedColumns: ["id"]
          }
        ]
      }
      Roles: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      SinglePlayers: {
        Row: {
          created_at: string | null
          eventId: number
          id: number
          userId: number
        }
        Insert: {
          created_at?: string | null
          eventId: number
          id?: number
          userId: number
        }
        Update: {
          created_at?: string | null
          eventId?: number
          id?: number
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "SinglePlayers_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "Events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "SinglePlayers_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      SuperAdminUsers: {
        Row: {
          created_at: string | null
          id: number
          username: string
        }
        Insert: {
          created_at?: string | null
          id: number
          username: string
        }
        Update: {
          created_at?: string | null
          id?: number
          username?: string
        }
        Relationships: []
      }
      TeamPlayers: {
        Row: {
          created_at: string | null
          id: number
          teamId: number
          userId: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          teamId: number
          userId: number
        }
        Update: {
          created_at?: string | null
          id?: number
          teamId?: number
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "TeamPlayers_teamId_fkey"
            columns: ["teamId"]
            isOneToOne: false
            referencedRelation: "Teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "TeamPlayers_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Teams: {
        Row: {
          created_at: string | null
          description: string
          eventId: number
          id: number
          messageId: string | null
          name: string
          teamLeader: number
        }
        Insert: {
          created_at?: string | null
          description: string
          eventId: number
          id?: number
          messageId?: string | null
          name: string
          teamLeader: number
        }
        Update: {
          created_at?: string | null
          description?: string
          eventId?: number
          id?: number
          messageId?: string | null
          name?: string
          teamLeader?: number
        }
        Relationships: [
          {
            foreignKeyName: "Teams_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "Events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Teams_teamLeader_fkey"
            columns: ["teamLeader"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Users: {
        Row: {
          created_at: string | null
          id: number
          roleId: number
          serverId: number
          userId: string
          username: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          roleId: number
          serverId: number
          userId: string
          username: string
        }
        Update: {
          created_at?: string | null
          id?: number
          roleId?: number
          serverId?: number
          userId?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "Users_roleId_fkey"
            columns: ["roleId"]
            isOneToOne: false
            referencedRelation: "Roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Users_serverId_fkey"
            columns: ["serverId"]
            isOneToOne: false
            referencedRelation: "DiscordServers"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
